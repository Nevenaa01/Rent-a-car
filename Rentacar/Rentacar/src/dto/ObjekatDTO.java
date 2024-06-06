package dto;

import java.net.URI;

public class ObjekatDTO {
	private String naziv;
	private String radnoVreme;
	private String adresa;
	private String grad;
	private double geografskaDuzina;
	private double geografskaSirina;
	private int broj;
	private int postanskiBroj;
	private URI uri;
	private String menadzer;
	public ObjekatDTO() {
		// TODO Auto-generated constructor stub
	}
	public ObjekatDTO(String naziv, String radnoVreme, String adresa, String grad, double geografskaDuzina,
			double geografskaSirina, int broj, int postanskiBroj, URI uri, String m) {
		super();
		this.naziv = naziv;
		this.radnoVreme = radnoVreme;
		this.adresa = adresa;
		this.grad = grad;
		this.geografskaDuzina = geografskaDuzina;
		this.geografskaSirina = geografskaSirina;
		this.broj = broj;
		this.postanskiBroj = postanskiBroj;
		this.uri = uri;
		this.menadzer=m;
	}
	public String getMenadzer() {
		return menadzer;
	}
	public void setMenadzer(String menadzer) {
		this.menadzer = menadzer;
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
	public String getAdresa() {
		return adresa;
	}
	public void setAdresa(String adresa) {
		this.adresa = adresa;
	}
	public String getGrad() {
		return grad;
	}
	public void setGrad(String grad) {
		this.grad = grad;
	}
	public double getGeografskaDuzina() {
		return geografskaDuzina;
	}
	public void setGeografskaDuzina(double geografskaDuzina) {
		this.geografskaDuzina = geografskaDuzina;
	}
	public double getGeografskaSirina() {
		return geografskaSirina;
	}
	public void setGeografskaSirina(double geografskaSirina) {
		this.geografskaSirina = geografskaSirina;
	}
	public int  getBroj() {
		return broj;
	}
	public void setBroj(int broj) {
		this.broj = broj;
	}
	public int  getPostanskiBroj() {
		return postanskiBroj;
	}
	public void setPostanskiBroj(int postanskiBroj) {
		this.postanskiBroj = postanskiBroj;
	}
	public URI getUri() {
		return uri;
	}
	public void setUri(URI uri) {
		this.uri = uri;
	}

}
