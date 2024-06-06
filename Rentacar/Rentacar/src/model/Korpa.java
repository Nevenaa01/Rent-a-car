package model;

import java.util.ArrayList;

public class Korpa {
	private Integer id;
	private ArrayList<Vozilo> vozila;
	private Korisnik korisnik;
	private Double cena;

	public Korpa() {
		super();
	}

	public Korpa(Integer id, ArrayList<Vozilo> vozila, Korisnik korisnik, Double cena) {
		super();
		this.id = id;
		this.vozila = vozila;
		this.korisnik = korisnik;
		this.cena = cena;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public ArrayList<Vozilo> getVozila() {
		return vozila;
	}

	public void setVozila(ArrayList<Vozilo> vozila) {
		this.vozila = vozila;
	}

	public Korisnik getKorisnik() {
		return korisnik;
	}

	public void setKorisnik(Korisnik korisnik) {
		this.korisnik = korisnik;
	}

	public Double getCena() {
		return cena;
	}

	public void setCena(Double cena) {
		this.cena = cena;
	}
}
