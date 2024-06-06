package dao;

import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import model.Komentar;
import model.Komentar.Status;

public class KomentarDAO {
	private Map<Integer, Komentar> komentari = new HashMap();
	private String csvFilePath;

	public KomentarDAO() {}

	public KomentarDAO(String contextPath) {
		this.csvFilePath = contextPath.replace("\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\WebShopREST\\", "\\Rentacar\\Rentacar\\WebContent\\data\\komentari.json");

		ucitajKomentare();
	}

	private void ucitajKomentare() {
		try
    	{
			FileReader fileReader = new FileReader(this.csvFilePath);
			Gson gson = new Gson();
			Komentar[] komentariNiz = gson.fromJson(fileReader, Komentar[].class);

			if(komentariNiz ==  null) {
				return;
			}

			for(Komentar komentar : komentariNiz) {
				komentari.put(komentar.getId(), komentar);
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

    		for (Komentar komentar : this.komentari.values()){
    			jsonArray.add(napraviJSON(komentar));
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
			return komentari.size() == 0 ? 1 : komentari.keySet().stream().mapToInt(v -> v).max().orElseThrow() + 1;
		}
		catch(Exception e) {
			System.out.println("Id se ne moze napraviti");
			return null;
		}
	}

	private JsonObject napraviJSON(Komentar komentar) {
		JsonObject jsonObject = new JsonObject();
        jsonObject.addProperty("id", komentar.getId().toString());
        jsonObject.addProperty("idKupca", komentar.getIdKupca());
        jsonObject.addProperty("idObjekta", komentar.getIdObjekta());
        jsonObject.addProperty("komentar", komentar.getKomentar());
        jsonObject.addProperty("ocena", komentar.getOcena());
        jsonObject.addProperty("status", komentar.getStatus().toString());

        return jsonObject;
	}

	public void dodaj(Komentar komentar) {
		komentar.setId(napraviID());
		komentar.setStatus(Status.naCekanju);
		komentari.put(komentar.getId(), komentar);

		upisi();
	}

	public ArrayList<Komentar> dobaviKomentareNaCekanjuZaObjekat(Integer idObjekta){
		return new ArrayList(komentari.values().stream()
				.filter(k -> k.getIdObjekta().equals(idObjekta) && k.getStatus().equals(Status.naCekanju))
				.collect(Collectors.toList()));
	}

	public Integer azuriraj(Integer id, Status status) {
		for(Komentar komentar : komentari.values()) {
			if(komentar.getId().equals(id)) {
				komentar.setStatus(status);
				upisi();
				ucitajKomentare();

				return komentar.getIdObjekta();
			}
		}
		
		return 0;
	}

	public ArrayList<Komentar> dobaviKomentarePoIdObjekta(Integer id){
		return new ArrayList(komentari.values().stream()
				.filter(k -> k.getIdObjekta().equals(id) && k.getStatus().equals(Status.odobreno))
				.collect(Collectors.toList()));
	}

	public ArrayList<Komentar> dobaviSveKomentarePoIdObjekta(Integer id){
		return new ArrayList(komentari.values().stream()
				.filter(k -> k.getIdObjekta().equals(id))
				.collect(Collectors.toList()));
	}
	
	public Komentar dobaviPoId(Integer id) {
		return komentari.get(id);
	}
}
