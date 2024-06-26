package dao;

import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import dto.ObjekatDTO;
import model.Lokacija;

public class LokacijaDAO {
	private Map<Integer, Lokacija> lokacije = new HashMap();
	private String csvFilePath;

	public LokacijaDAO() {}

	public LokacijaDAO(String contextPath) {
		this.csvFilePath = contextPath.replace("\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\WebShopREST\\", "\\Rentacar\\Rentacar\\WebContent\\data\\lokacije.json");

		ucitajObjekte();
	}

	private void ucitajObjekte() {
		try
    	{
			FileReader fileReader = new FileReader(this.csvFilePath);
			Gson gson = new Gson();
			Lokacija[] lokazijeNiz = gson.fromJson(fileReader, Lokacija[].class);

			if(lokazijeNiz ==  null) {
				return;
			}

			for(Lokacija objekat : lokazijeNiz) {
				lokacije.put(objekat.getId(), objekat);
			}

			fileReader.close();
    	} catch (Exception e)
    	{
    		System.out.println(e.getMessage());
    		System.out.println("nesto");
    	}
	}

	public void upisi() {
		try
    	{
    		FileWriter fileWriter = new FileWriter(this.csvFilePath);
    		Gson gson = new GsonBuilder().setPrettyPrinting().create();
    		JsonArray jsonArray = new JsonArray();

    		for (Lokacija objekat : lokacije.values()){
    			jsonArray.add(napraviJSON(objekat));
    		}

    		String jsonString = gson.toJson(jsonArray);
    		fileWriter.write(jsonString);

    		fileWriter.close();
    	}
    	catch (Exception e)
    	{
    		System.out.println("Greska pri upisu");
    	}
	}

	private Integer napraviID() {
		try {
			return lokacije.size() == 0 ? 1 : lokacije.keySet().stream().mapToInt(v -> v).max().orElseThrow() + 1;
		}
		catch(Exception e) {
			System.out.println("Id se ne moze napraviti");
			return null;
		}
	}

	private JsonObject napraviJSON(Lokacija lokacija) {
		JsonObject jsonObject = new JsonObject();
		jsonObject.addProperty("id", lokacija.getId().toString());
		jsonObject.addProperty("duzina", lokacija.getDuzina());
		jsonObject.addProperty("sirina", lokacija.getSirina());
		jsonObject.addProperty("adresa", lokacija.getAdresa());
		return jsonObject;
	}

	public ArrayList<String> dobaviSveAdrese(){
		ArrayList<String> adrese = new ArrayList<>();

		for(Lokacija lokacija : lokacije.values()) {
			adrese.add(lokacija.getAdresa());
		}

		return adrese;
	}

	public boolean Kreiraj(ObjekatDTO objekat)
	{
		Lokacija l=new Lokacija(objekat,napraviID());
		if(l != null)
		{
			this.lokacije.put(l.getId(), l);
			upisi();
			return true;
		}
		return false;
	}
}
