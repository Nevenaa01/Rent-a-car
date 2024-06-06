package model;

import java.net.URI;


public class Vozilo {
	public enum Vrsta{manuelni, automatik, defaultna}
	public enum TipGoriva{dizel, benzin, hibrid, elektricni, defaultna}
	public enum StatusVozila{dostupno, iznajmljeno}
	public enum Tip{auto, kombi, mobilehome, defaultni}

	private Integer id;
	private String marka;
	private String model;
	private Double cena;
	private Tip tip;
	private Integer idObjekta;
	private Vrsta vrsta;
	private TipGoriva tipGoriva;
	private Double potrosnja;
	private Integer brojVrata;
	private Integer brojOsoba;
	private String opis;
	private URI slika;
	private StatusVozila status;

	public Vozilo() {
		super();
	}

	public Vozilo(Integer id, String marka, String model, Double cena, Tip tip, Integer idObjekta, Vrsta vrsta, TipGoriva tipGoriva,
			Double potrosnja, Integer brojVrata, Integer brojOsoba, String opis, URI slika, StatusVozila status) {
		super();
		this.id = id;
		this.marka = marka;
		this.model = model;
		this.cena = cena;
		this.tip = tip;
		this.idObjekta = idObjekta;
		this.vrsta = vrsta;
		this.tipGoriva = tipGoriva;
		this.potrosnja = potrosnja;
		this.brojVrata = brojVrata;
		this.brojOsoba = brojOsoba;
		this.opis = opis;
		this.slika = slika;
		this.status = status;
	}

	public Vozilo(Vozilo original, Integer id) {
	    this.id =id;
	    this.marka = original.marka;
	    this.model = original.model;
	    this.cena = original.cena;
	    this.tip = original.tip;
	    this.vrsta = original.vrsta;
	    this.tipGoriva = original.tipGoriva;
	    this.potrosnja = original.potrosnja;
	    this.brojVrata = original.brojVrata;
	    this.brojOsoba = original.brojOsoba;
	    this.opis = original.opis;
	    this.slika = original.slika;
	    this.status = StatusVozila.dostupno;
	    this.idObjekta=original.getIdObjekta();
	}
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getMarka() {
		return marka;
	}

	public void setMarka(String marka) {
		this.marka = marka;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public Double getCena() {
		return cena;
	}

	public void setCena(Double cena) {
		this.cena = cena;
	}

	public Tip getTip() {
		return tip;
	}

	public void setTip(Tip tip) {
		this.tip = tip;
	}

	public Integer getIdObjekta() {
		return idObjekta;
	}

	public void setIdObjekta(Integer idObjekta) {
		this.idObjekta = idObjekta;
	}

	public Vrsta getVrsta() {
		return vrsta;
	}

	public void setVrsta(Vrsta vrsta) {
		this.vrsta = vrsta;
	}

	public TipGoriva getTipGoriva() {
		return tipGoriva;
	}

	public void setTipGoriva(TipGoriva tipGoriva) {
		this.tipGoriva = tipGoriva;
	}

	public Double getPotrosnja() {
		return potrosnja;
	}

	public void setPotrosnja(Double potrosnja) {
		this.potrosnja = potrosnja;
	}

	public Integer getBrojVrata() {
		return brojVrata;
	}

	public void setBrojVrata(Integer brojVrata) {
		this.brojVrata = brojVrata;
	}

	public Integer getBrojOsoba() {
		return brojOsoba;
	}

	public void setBrojOsoba(Integer brojOsoba) {
		this.brojOsoba = brojOsoba;
	}

	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}


	public URI getSlika() { return slika; }

	public void setSlika(URI slika) { this.slika = slika; }


	public StatusVozila getStatus() {
		return status;
	}

	public void setStatus(StatusVozila status) {
		this.status = status;
	}
}
