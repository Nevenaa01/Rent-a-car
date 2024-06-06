package model;

import java.net.URI;
import java.util.ArrayList;

import dto.ObjekatDTO;



public class RentacarObjekat {
	private Integer id;
	private String naziv;
	private String radnoVreme;
	private Status status;
	private Lokacija lokacija;
	private URI uri;
	private Double ocena;
	private ArrayList<Vozilo> vozila;

	public enum Status{Radi, Ne_radi}

	public RentacarObjekat() {
		// TODO Auto-generated constructor stub
	}

	public RentacarObjekat(Integer id, String naziv, String radnoVreme, Status status, Lokacija lokacija, URI uri,
			Double ocena, ArrayList<Vozilo> vozila) {
		super();
		this.id = id;
		this.naziv = naziv;
		this.radnoVreme = radnoVreme;
		this.status = status;
		this.lokacija = lokacija;
		this.uri = uri;
		this.ocena = ocena;
		this.vozila = vozila;
	}
	public RentacarObjekat(ObjekatDTO o,int id)
	{
		this.lokacija=new Lokacija();
		this.id=id;
		this.naziv=o.getNaziv();
		this.radnoVreme=o.getRadnoVreme();
		this.lokacija.setId(50);
		this.lokacija.setDuzina(o.getGeografskaDuzina());
		this.lokacija.setSirina(o.getGeografskaSirina());
		this.lokacija.setAdresa(o.getAdresa()+","+o.getBroj()+","+o.getGrad()+","+o.getPostanskiBroj());
		this.uri=o.getUri();
		this.status=Status.Ne_radi;
		this.ocena=0.0;
		this.vozila=new ArrayList<>();
	}
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNaziv() {
		return naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}

	public String getRadnoVreme() {
		return radnoVreme;
	}

	public void setRadnoVreme(String radnoVreme) {
		this.radnoVreme = radnoVreme;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public Lokacija getLokacija() {
		return lokacija;
	}

	public URI getUri() {
		return uri;
	}

	public void setUri(URI uri) {
		this.uri = uri;
	}

	public void setLokacija(Lokacija lokacija) {
		this.lokacija = lokacija;
	}

	public Double getOcena() {
		return ocena;
	}

	public void setOcena(Double ocena) {
		this.ocena = ocena;
	}

	public ArrayList<Vozilo> getVozila() {
		return vozila;
	}

	public void setVozila(ArrayList<Vozilo> vozila) {
		this.vozila = vozila;
	}
}
