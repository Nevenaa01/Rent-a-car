package model;

import java.time.LocalDateTime;
import java.util.ArrayList;

public class Porudzbina {
	public enum Status{obrada, odobreno, preuzeto, vraceno, odbijeno, otkazano}

	private String id;
	private ArrayList<Vozilo> vozila;
	private RentacarObjekat objekat;
	private LocalDateTime datumIznajmljivanja;
	private Integer trajanjeNajma;
	private Double cena;
	private String kupac;
	private String korisnickoImeKupca;
	private Status status;
	private String komentar;

	public String getKomentar() {
		return komentar;
	}



	public void setKomentar(String komentar) {
		this.komentar = komentar;
	}



	public Porudzbina() {
		super();
	}



	public Porudzbina(String id, ArrayList<Vozilo> vozila, RentacarObjekat objekat, LocalDateTime datumIznajmljivanja,
			Integer trajanjeNajma, Double cena, String kupac, String korisnickoImeKupca, Status status) {
		super();
		this.id = id;
		this.vozila = vozila;
		this.objekat = objekat;
		this.datumIznajmljivanja = datumIznajmljivanja;
		this.trajanjeNajma = trajanjeNajma;
		this.cena = cena;
		this.kupac = kupac;
		this.korisnickoImeKupca = korisnickoImeKupca;
		this.status = status;
		this.komentar="nema";
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

	public RentacarObjekat getObjekat() {
		return objekat;
	}

	public void setObjekat(RentacarObjekat objekat) {
		this.objekat = objekat;
	}

	public LocalDateTime getDatumIznajmljivanja() {
		return datumIznajmljivanja;
	}

	public void setDatumIznajmljivanja(LocalDateTime datumIznajmljivanja) {
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
