package model;

public class Menadzer extends Korisnik {
	private Integer rentacarObjekatId;



	public Integer getRentacarObjekat() {
		return rentacarObjekatId;
	}



	public void setRentacarObjekat(Integer rentacarObjekat) {
		this.rentacarObjekatId = rentacarObjekat;
	}



	public Menadzer(String korisnickoIme, String lozinka, String ime, String prezime, Pol pol, String datumRodjenja,
			Uloga uloga, Integer rentacarObjekat) {
		super(korisnickoIme, lozinka, ime, prezime, pol, datumRodjenja, uloga);
		this.rentacarObjekatId = rentacarObjekat;
	}



	public Menadzer() {
		// TODO Auto-generated constructor stub
	}

	public Menadzer(Korisnik k, Integer rentaCarId)
	{
		super(k.getKorisnickoIme(), k.getLozinka(), k.getIme(), k.getPrezime(), k.getPol(), k.getDatumRodjenja(), k.getUloga());
        this.rentacarObjekatId = rentaCarId;
	}
}
