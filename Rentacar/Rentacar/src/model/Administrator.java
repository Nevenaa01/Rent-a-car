package model;

public class Administrator extends Korisnik {

	public Administrator(String korisnickoIme, String lozinka, String ime, String prezime, Pol pol,
			String datumRodjenja, Uloga uloga) {
		super(korisnickoIme, lozinka, ime, prezime, pol, datumRodjenja, uloga);
		// TODO Auto-generated constructor stub
	}

	public Administrator(String korisnickoIme, String lozinka, String ime, String prezime, String pol,
			String datumRodjenja, String uloga) {
		super(korisnickoIme, lozinka, ime, prezime, pol, datumRodjenja, uloga);
		// TODO Auto-generated constructor stub
	}

	public Administrator() {
		// TODO Auto-generated constructor stub
	}

}
