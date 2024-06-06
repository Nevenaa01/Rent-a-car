package services;

import java.util.ArrayList;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import dao.KomentarDAO;
import dao.KorisnikDAO;
import dao.RentACarObjekatDAO;
import dto.KomentarKorisnikDTO;
import model.Komentar;
import model.Komentar.Status;
import model.RentacarObjekat;

@Path("/komentar")
public class KomentarService {
	@Context
	ServletContext ctx;

	public KomentarService() {}

	@PostConstruct
	public void init() {
		if (ctx.getAttribute("komentarDAO") == null) {
	    	String contextPath = ctx.getRealPath("");
			ctx.setAttribute("komentarDAO", new KomentarDAO(contextPath));
		}
		if (ctx.getAttribute("korisnikDAO") == null) {
	    	String contextPath = ctx.getRealPath("");
			ctx.setAttribute("korisnikDAO", new KorisnikDAO(contextPath));
		}
		if (ctx.getAttribute("rentACarObjekatDAO") == null) {
	    	String contextPath = ctx.getRealPath("");
			ctx.setAttribute("rentACarObjekatDAO", new RentACarObjekatDAO(contextPath));
		}
	}

	@POST
	@Path("/dodaj")
	@Consumes(MediaType.APPLICATION_JSON)
	public void dodaj(Komentar komentar) {
		KomentarDAO komentarDAO = (KomentarDAO) ctx.getAttribute("komentarDAO");

		komentarDAO.dodaj(komentar);
	}

	@GET
	@Path("/dobaviKomentareNaCekanjuZaObjekat/{idObjekta}")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<KomentarKorisnikDTO> dobaviKomentareNaCekanjuZaObjekat(@PathParam("idObjekta") Integer idObjekta){
		KomentarDAO komentarDAO = (KomentarDAO) ctx.getAttribute("komentarDAO");
		KorisnikDAO korisnikDAO = (KorisnikDAO) ctx.getAttribute("korisnikDAO");

		ArrayList<KomentarKorisnikDTO> komentarKorisnikDTO = new ArrayList<>();
		ArrayList<Komentar> komentari = komentarDAO.dobaviKomentareNaCekanjuZaObjekat(idObjekta);

		for(Komentar komentar : komentari) {
			komentarKorisnikDTO.add(new KomentarKorisnikDTO(
					komentar.getId(),
					korisnikDAO.ucitajPoId(komentar.getIdKupca()).getIme() + " " + korisnikDAO.ucitajPoId(komentar.getIdKupca()).getPrezime(),
					korisnikDAO.ucitajPoId(komentar.getIdKupca()).getKorisnickoIme(),
					komentar.getIdObjekta(),
					komentar.getKomentar(),
					komentar.getOcena(),
					komentar.getStatus()
					));
		}
		return komentarKorisnikDTO;
	}

	@PUT
	@Path("/azuriraj/{id}/{status}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void azuriraj(@PathParam("id") Integer id, @PathParam("status") Status status) {
		KomentarDAO komentarDAO = (KomentarDAO) ctx.getAttribute("komentarDAO");
		RentACarObjekatDAO rentACarObjekatDAO = (RentACarObjekatDAO) ctx.getAttribute("rentACarObjekatDAO");
		
		ArrayList<RentacarObjekat> objekti = rentACarObjekatDAO.dobaviSve();

		Integer idObjekta = komentarDAO.azuriraj(id, status);
		
		if(!idObjekta.equals(0)) {
			RentacarObjekat objekat = objekti.stream().filter(o -> o.getId().equals(idObjekta)).collect(Collectors.toList()).get(0);
			
			objekat.setOcena((objekat.getOcena() + komentarDAO.dobaviPoId(id).getOcena())/2);
			
			rentACarObjekatDAO.azuriraj(objekat);
		}
	}

	@GET
	@Path("/dobaviKomentarePoIdObjekta/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<KomentarKorisnikDTO> dobaviKomentarePoIdObjekta(@PathParam("id") Integer id){
		KomentarDAO komentarDAO = (KomentarDAO) ctx.getAttribute("komentarDAO");
		KorisnikDAO korisnikDAO = (KorisnikDAO) ctx.getAttribute("korisnikDAO");

		ArrayList<KomentarKorisnikDTO> komentarKorisnikDTO = new ArrayList<>();
		ArrayList<Komentar> komentari = komentarDAO.dobaviKomentarePoIdObjekta(id);

		for(Komentar komentar : komentari) {
			komentarKorisnikDTO.add(new KomentarKorisnikDTO(
					komentar.getId(),
					korisnikDAO.ucitajPoId(komentar.getIdKupca()).getIme() + " " + korisnikDAO.ucitajPoId(komentar.getIdKupca()).getPrezime(),
					korisnikDAO.ucitajPoId(komentar.getIdKupca()).getKorisnickoIme(),
					komentar.getIdObjekta(),
					komentar.getKomentar(),
					komentar.getOcena(),
					komentar.getStatus()
					));
		}

		return komentarKorisnikDTO;
	}

	@GET
	@Path("/dobaviSveKomentarePoIdObjekta/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<KomentarKorisnikDTO> dobaviSveKomentarePoIdObjekta(@PathParam("id") Integer id){
		KomentarDAO komentarDAO = (KomentarDAO) ctx.getAttribute("komentarDAO");
		KorisnikDAO korisnikDAO = (KorisnikDAO) ctx.getAttribute("korisnikDAO");

		ArrayList<KomentarKorisnikDTO> komentarKorisnikDTO = new ArrayList<>();
		ArrayList<Komentar> komentari = komentarDAO.dobaviSveKomentarePoIdObjekta(id);

		for(Komentar komentar : komentari) {
			komentarKorisnikDTO.add(new KomentarKorisnikDTO(
					komentar.getId(),
					korisnikDAO.ucitajPoId(komentar.getIdKupca()).getIme() + " " + korisnikDAO.ucitajPoId(komentar.getIdKupca()).getPrezime(),
					korisnikDAO.ucitajPoId(komentar.getIdKupca()).getKorisnickoIme(),
					komentar.getIdObjekta(),
					komentar.getKomentar(),
					komentar.getOcena(),
					komentar.getStatus()
					));
		}

		return komentarKorisnikDTO;
	}
}
