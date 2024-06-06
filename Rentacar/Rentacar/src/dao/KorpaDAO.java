package dao;

import java.io.FileReader;
import java.io.FileWriter;
import java.util.HashMap;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import model.Korpa;

public class KorpaDAO {
	private Map<Integer, Korpa> korpe = new HashMap();
	private String csvFilePath;

	public KorpaDAO() {}

	public KorpaDAO(String contextPath) {
		this.csvFilePath = contextPath.replace("\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\WebShopREST\\", "\\Rentacar\\Rentacar\\WebContent\\data\\korpe.json");

		ucitajKorpe();
	}

	private void ucitajKorpe() {
		try
    	{
			FileReader fileReader = new FileReader(this.csvFilePath);
			Gson gson = new Gson();
			Korpa[] korpeNiz = gson.fromJson(fileReader, Korpa[].class);

			if(korpeNiz ==  null) {
				return;
			}

			for(Korpa korpa : korpeNiz) {
				korpe.put(korpa.getId(), korpa);
			}

			fileReader.close();
    	} catch (Exception e)
    	{
    		System.out.println(e.getMessage());
    	}
	}

	public void dodajKorpu(Korpa korpa) {
		korpa.setId(napraviID());
		korpe.put(korpa.getId(), korpa);
		upisi();
	}

	public void upisi() {
		try
    	{
    		FileWriter fileWriter = new FileWriter(this.csvFilePath);
    		Gson gson = new GsonBuilder().setPrettyPrinting().create();
    		JsonArray jsonArray = new JsonArray();

    		for (Korpa korpa : korpe.values()){
    			jsonArray.add(napraviJSON(korpa));
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
			return korpe.size() == 0 ? 1 : korpe.keySet().stream().mapToInt(v -> v).max().orElseThrow() + 1;
		}
		catch(Exception e) {
			System.out.println("Id se ne moze napraviti");
			return null;
		}
	}

	private JsonObject napraviJSON(Korpa korpa) {
		JsonObject jsonObject = new JsonObject();
		jsonObject.addProperty("id", korpa.getId());
		//jsonObject.addProperty("vozila", korpa.getVozila());
		//jsonObject.addProperty("korisnik", korpa.getKorisnik());
		jsonObject.addProperty("cena", korpa.getCena());
		return jsonObject;
	}
}
