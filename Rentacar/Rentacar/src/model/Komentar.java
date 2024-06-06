package model;

public class Komentar {
	public enum Status{naCekanju, odobreno, odbijeno}

	private Integer id;
	private Integer idKupca;
	private Integer idObjekta;
	private String komentar;
	private Integer ocena;
	private Status status;

	public Komentar() {
		super();
	}

	public Komentar(Integer id, Integer idKupca, Integer idObjekta, String komentar, Integer ocena, Status status) {
		super();
		this.id = id;
		this.idKupca = idKupca;
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

	public Integer getIdKupca() {
		return idKupca;
	}

	public void setIdKupca(Integer idKupca) {
		this.idKupca = idKupca;
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
