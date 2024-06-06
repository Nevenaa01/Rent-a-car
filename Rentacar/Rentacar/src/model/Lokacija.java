package model;

import dto.ObjekatDTO;

public class Lokacija {
	private Integer id;
	private Double duzina;
	private Double sirina;
	private String adresa;

	public Lokacija() {
		super();
	}

	public Lokacija(Integer id, Double duzina, Double sirina, String adresa) {
		super();
		this.id = id;
		this.duzina = duzina;
		this.sirina = sirina;
		this.adresa = adresa;
	}

	public Lokacija(ObjekatDTO o, Integer id) {
	    this.id = id;
	    this.duzina = o.getGeografskaDuzina();
	    this.sirina = o.getGeografskaSirina();
	    this.adresa = o.getAdresa()+","+o.getBroj()+","+o.getGrad()+","+o.getPostanskiBroj();
	}
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Double getDuzina() {
		return duzina;
	}

	public void setDuzina(Double duzina) {
		this.duzina = duzina;
	}

	public Double getSirina() {
		return sirina;
	}

	public void setSirina(Double sirina) {
		this.sirina = sirina;
	}

	public String getAdresa() {
		return adresa;
	}

	public void setAdresa(String adresa) {
		this.adresa = adresa;
	}
}
