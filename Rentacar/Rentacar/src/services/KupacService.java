package services;
import java.util.ArrayList;

import javax.annotation.PostConstruct;
import javax.inject.Singleton;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import dao.KupacDAO;
import dao.PorudzbinaDAO;
import model.Kupac;
@Path("/kupac")
@Singleton
public class KupacService {

	@Context
	ServletContext ctx;
	@Context
	HttpServletRequest request;

	public KupacService() {}


	@PostConstruct
	// ctx polje je null u konstruktoru, mora se pozvati nakon konstruktora (@PostConstruct anotacija)
	public void init() {
		// Ovaj objekat se instancira vi�e puta u toku rada aplikacije
		// Inicijalizacija treba da se obavi samo jednom
		if (ctx.getAttribute("kupacDAO") == null) {
	    	String contextPath = ctx.getRealPath("");
			ctx.setAttribute("kupacDAO", new KupacDAO(contextPath));

		}
		if (ctx.getAttribute("porudzbinaDAO") == null) {
	    	String contextPath = ctx.getRealPath("");
			ctx.setAttribute("porudzbinaDAO", new PorudzbinaDAO(contextPath));
		}
	}

	@GET
	@Path("/svikupci")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Kupac> PrikaziSve() {
		KupacDAO kupacDAO = (KupacDAO) ctx.getAttribute("kupacDAO");
		PorudzbinaDAO porudzbinaDAO = (PorudzbinaDAO) ctx.getAttribute("porudzbinaDAO");
		return kupacDAO.Ucitaj(porudzbinaDAO.dobaviSve());
	}

	@GET
	@Path("/sort/{parametar}/{rastuciRedosled}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Kupac> sort(@PathParam("parametar") String parametar, @PathParam("rastuciRedosled") boolean rastuciRedosled){
		KupacDAO kupacDAO = (KupacDAO) ctx.getAttribute("kupacDAO");
		return kupacDAO.sort(parametar, rastuciRedosled);
	}

	@GET
	@Path("/filter/{parametar}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Kupac> Filter(@PathParam("parametar") String parametar){
		KupacDAO kupacDAO = (KupacDAO) ctx.getAttribute("kupacDAO");
		return kupacDAO.Filter(parametar);
	}
	
	@GET
	@Path("/dobaviPoId/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Kupac dobaviPoId(@PathParam("id") Integer id) {
		KupacDAO kupacDAO = (KupacDAO) ctx.getAttribute("kupacDAO");
		
		return kupacDAO.dobaviPoId(id);
	}

	@PUT
	@Path("/dodajBodove/{korisnickoIme}/{bodovi}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void dodajBodove(@PathParam("korisnickoIme") String korisnickoIme, @PathParam("bodovi") String bodovi) {
		KupacDAO kupacDAO = (KupacDAO) ctx.getAttribute("kupacDAO");

		kupacDAO.dodajBodove(korisnickoIme, bodovi);
	}

	@PUT
	@Path("/oduzmibodove/{korisnickoIme}/{bodovi}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void OduzmiBodove(@PathParam("korisnickoIme") String korisnickoIme, @PathParam("bodovi") String bodovi) {
		KupacDAO kupacDAO = (KupacDAO) ctx.getAttribute("kupacDAO");

		kupacDAO.OduzmiBodove(korisnickoIme, bodovi);
	}
}
