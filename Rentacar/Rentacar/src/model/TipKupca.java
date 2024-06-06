package model;

public class TipKupca {
	public enum Ime{zlatni,srebrni,bronzani}

	private Ime ime;
	private Integer popust;
	private Integer brojBodova;

	public String getIme() {
		return ime.toString();
	}

	public void setIme(String ime) {
		if(ime.equals("zlatni"))
			this.ime = Ime.zlatni;
		if(ime.equals("srebrni"))
			this.ime=Ime.srebrni;
		else
			this.ime=Ime.bronzani;
	}

	public Integer getPopust() {
		return popust;
	}

	public void setPopust(Integer popust) {
		this.popust = popust;
	}

	public Integer getBrojBodova() {
		return brojBodova;
	}

	public void setBrojBodova(Integer brojBodova) {
		this.brojBodova = brojBodova;
	}

	public TipKupca(Ime ime, Integer popust, Integer brojBodova) {
		super();
		this.ime = ime;
		this.popust = popust;
		this.brojBodova = brojBodova;
	}

	public TipKupca() {
		// TODO Auto-generated constructor stub
	}

}
