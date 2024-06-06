package dto;

import java.util.ArrayList;

import model.Porudzbina.Status;
import model.RentacarObjekat;
import model.Vozilo;

public class PorudzbinaDTO {
	private String id;
	private ArrayList<Vozilo> vozila;
	private ArrayList<RentacarObjekat> objekti;
	private String datumIznajmljivanja;
	private Integer trajanjeNajma;
	private Double cena;
	private String kupac;
	private String korisnickoImeKupca;
	private Status status;

	public PorudzbinaDTO() {
		super();
	}

	public PorudzbinaDTO(String id, ArrayList<Vozilo> vozila, ArrayList<RentacarObjekat> objekti,
			String datumIznajmljivanja, Integer trajanjeNajma, Double cena, String kupac, String korisnickoImeKupca,
			Status status) {
		super();
		this.id = id;
		this.vozila = vozila;
		this.objekti = objekti;
		this.datumIznajmljivanja = datumIznajmljivanja;
		this.trajanjeNajma = trajanjeNajma;
		this.cena = cena;
		this.kupac = kupac;
		this.korisnickoImeKupca = korisnickoImeKupca;
		this.status = status;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public ArrayList<Vozilo> getVozila() {
		return vozila;
	}

	public void setVozila(ArrayList<Vozilo> vozila) {
		this.vozila = vozila;
	}

	public ArrayList<RentacarObjekat> getObjekti() {
		return objekti;
	}

	public void setObjekti(ArrayList<RentacarObjekat> objekti) {
		this.objekti = objekti;
	}

	public String getDatumIznajmljivanja() {
		return datumIznajmljivanja;
	}

	public void setDatumIznajmljivanja(String datumIznajmljivanja) {
		this.datumIznajmljivanja = datumIznajmljivanja;
	}

	public Integer getTrajanjeNajma() {
		return trajanjeNajma;
	}

	public void setTrajanjeNajma(Integer trajanjeNajma) {
		this.trajanjeNajma = trajanjeNajma;
	}

	public Double getCena() {
		return cena;
	}

	public void setCena(Double cena) {
		this.cena = cena;
	}

	public String getKupac() {
		return kupac;
	}

	public void setKupac(String kupac) {
		this.kupac = kupac;
	}

	public String getKorisnickoImeKupca() {
		return korisnickoImeKupca;
	}

	public void setKorisnickoImeKupca(String korisnickoImeKupca) {
		this.korisnickoImeKupca = korisnickoImeKupca;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}
}
