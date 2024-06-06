package model;

enum Pol { Muski, Zenski }
enum Uloga { Kupac, Menadzer, Administrator }


public class Korisnik {
	private Integer id;
	private String korisnickoIme;

    private String lozinka;
    private String ime;
    private String prezime;
    private Pol pol;

    private String datumRodjenja;
    private Uloga uloga;
    private String blokiran;

    public String getBlokiran() {
		return blokiran;
	}
	public void setBlokiran(String blokiran) {
		this.blokiran = blokiran;
	}
	public Integer getId() {
    	return id;
    }
    public void setId(Integer id) {
    	this.id = id;
    }
	public String getKorisnickoIme() {
		return korisnickoIme;
	}
	public void setKorisnickoIme(String korisnickoIme) {
		this.korisnickoIme = korisnickoIme;
	}
	public String getLozinka() {
		return lozinka;
	}
	public void setLozinka(String lozinka) {
		this.lozinka = lozinka;
	}
	public String getIme() {
		return ime;
	}
	public void setIme(String ime) {
		this.ime = ime;
	}
	public String getPrezime() {
		return prezime;
	}
	public void setPrezime(String prezime) {
		this.prezime = prezime;
	}
	public String getPol() {
		return pol.toString();
	}
	public void setPol(Pol pol) {
		this.pol = pol;
	}
	public void setPolString(String pol) {
		this.pol = pol == Pol.Muski.toString() ? Pol.Muski : Pol.Zenski;
	}
	public String getDatumRodjenja() {
		return datumRodjenja;
	}
	public void setDatumRodjenja(String datumRodjenja) {
		this.datumRodjenja = datumRodjenja;
	}
	public String getUloga() {
		return uloga.toString();
	}
	public void setUloga(Uloga uloga) {
		this.uloga = uloga;
	}
	public void setUlogaString(String uloga) {
		if(uloga == Uloga.Administrator.toString())
			this.uloga = Uloga.Administrator;
		else if(uloga == Uloga.Kupac.toString())
			this.uloga = Uloga.Kupac;
		else
			this.uloga = Uloga.Menadzer;
	}
	public Korisnik(String korisnickoIme, String lozinka, String ime, String prezime, Pol pol, String datumRodjenja,
			Uloga uloga) {
		super();
		this.korisnickoIme = korisnickoIme;
		this.lozinka = lozinka;
		this.ime = ime;
		this.prezime = prezime;
		this.pol = pol;
		this.datumRodjenja = datumRodjenja;
		this.uloga = uloga;
		this.blokiran="ne";
	}
	public Korisnik(String korisnickoIme, String lozinka, String ime, String prezime, String pol, String datumRodjenja,
			String uloga) {
		super();
		this.korisnickoIme = korisnickoIme;
		this.lozinka = lozinka;
		this.ime = ime;
		this.prezime = prezime;
		this.pol = pol == Pol.Muski.toString() ? Pol.Muski : Pol.Zenski;
		this.datumRodjenja = datumRodjenja;

		if(uloga == Uloga.Administrator.toString())
			this.uloga = Uloga.Administrator;
		else if(uloga == Uloga.Kupac.toString())
			this.uloga = Uloga.Kupac;
		else
			this.uloga = Uloga.Menadzer;
		this.blokiran="ne";
	}
	public Korisnik() {
	}
	@Override
	public String toString() {
		return "Korisnik [id=" + id + ", korisnickoIme=" + korisnickoIme + ", lozinka=" + lozinka + ", ime=" + ime
				+ ", prezime=" + prezime + ", pol=" + pol + ", datumRodjenja=" + datumRodjenja + ", uloga=" + uloga
				+ "]";
	}


}
