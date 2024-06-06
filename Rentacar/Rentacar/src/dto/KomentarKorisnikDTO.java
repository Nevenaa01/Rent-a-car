package dto;

import model.Komentar.Status;

public class KomentarKorisnikDTO {
	private Integer id;
	private String imePrezimeKorisnika;
	private String korisnickoIme;
	private Integer idObjekta;
	private String komentar;
	private Integer ocena;
	private Status status;

	public KomentarKorisnikDTO() {
		super();
	}

	public KomentarKorisnikDTO(Integer id, String imePrezimeKorisnika, String korisnickoIme, Integer idObjekta,
			String komentar, Integer ocena, Status status) {
		super();
		this.id = id;
		this.imePrezimeKorisnika = imePrezimeKorisnika;
		this.korisnickoIme = korisnickoIme;
		this.idObjekta = idObjekta;
		this.komentar = komentar;
		this.ocena = ocena;
		this.status = status;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getImePrezimeKorisnika() {
		return imePrezimeKorisnika;
	}

	public void setImePrezimeKorisnika(String imePrezimeKorisnika) {
		this.imePrezimeKorisnika = imePrezimeKorisnika;
	}

	public String getKorisnickoIme() {
		return korisnickoIme;
	}

	public void setKorisnickoIme(String korisnickoIme) {
		this.korisnickoIme = korisnickoIme;
	}

	public Integer getIdObjekta() {
		return idObjekta;
	}

	public void setIdObjekta(Integer idObjekta) {
		this.idObjekta = idObjekta;
	}

	public String getKomentar() {
		return komentar;
	}

	public void setKomentar(String komentar) {
		this.komentar = komentar;
	}

	public Integer getOcena() {
		return ocena;
	}

	public void setOcena(Integer ocena) {
		this.ocena = ocena;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}
}
