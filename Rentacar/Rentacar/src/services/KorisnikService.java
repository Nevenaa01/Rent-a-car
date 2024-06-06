package services;
import java.util.ArrayList;

import javax.annotation.PostConstruct;
import javax.inject.Singleton;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import dao.KorisnikDAO;
import dao.PorudzbinaDAO;
import dao.VoziloDAO;
import model.Korisnik;
import model.Porudzbina;
@Path("/korisnik")
@Singleton
public class KorisnikService {

	@Context
	ServletContext ctx;
	@Context
	HttpServletRequest request;

	public KorisnikService() {}


	@PostConstruct
	// ctx polje je null u konstruktoru, mora se pozvati nakon konstruktora (@PostConstruct anotacija)
	public void init() {
		// Ovaj objekat se instancira vi�e puta u toku rada aplikacije
		// Inicijalizacija treba da se obavi samo jednom
		if (ctx.getAttribute("korisnikDAO") == null) {
	    	String contextPath = ctx.getRealPath("");
			ctx.setAttribute("korisnikDAO", new KorisnikDAO(contextPath));

		}
	}

	@POST
	@Path("/registruj")
	@Consumes(MediaType.APPLICATION_JSON)
	public boolean registrujKorisnika(Korisnik korisnik) {
		KorisnikDAO korisnikDAO = (KorisnikDAO) ctx.getAttribute("korisnikDAO");

		if(korisnikDAO.validanKorisnik(korisnik)) {
			korisnikDAO.dodajKorisnika(korisnik);

			return true;
		}

		return false;
	}

	@GET
	@Path("/ucitaj/{korIme}")
	@Produces(MediaType.APPLICATION_JSON)
	public Korisnik UcitajJednu(@PathParam("korIme") String korIme)
	{
		KorisnikDAO korisnikDAO = (KorisnikDAO) ctx.getAttribute("korisnikDAO");
		//System.out.println(korisnikDAO.findByKorIme(korIme).getIme());
		Korisnik k=korisnikDAO.findByKorIme(korIme);

		return k;
	}

	@GET
	@Path("/ucitajPoId/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Korisnik ucitajPoId(@PathParam("id") Integer id) {
		KorisnikDAO korisnikDAO = (KorisnikDAO) ctx.getAttribute("korisnikDAO");

		return korisnikDAO.ucitajPoId(id);
	}

	@PUT
	@Path("/izmeniKorisnika")
	@Consumes(MediaType.APPLICATION_JSON)
	public boolean izmeniKorisnika(Korisnik korisnik) {
		KorisnikDAO korisnikDAO = (KorisnikDAO) ctx.getAttribute("korisnikDAO");
		Korisnik k =(Korisnik) request.getSession().getAttribute("ulogovan");
		return korisnikDAO.izmeniKorisnika(korisnik);
	}


	@GET
	@Path("/ulogujse/{korIme}/{lozinka}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public boolean ulogujSe(@PathParam("korIme") String korIme,@PathParam("lozinka") String lozinka) {
		KorisnikDAO korisnikDAO = (KorisnikDAO) ctx.getAttribute("korisnikDAO");
		Korisnik ulogovan=korisnikDAO.ulogujSe(korIme,lozinka);
		if(ulogovan!=null)
		{
			if( ulogovan.getBlokiran().equals("ne"))
			{
				request.getSession().setAttribute("ulogovan",ulogovan);
				return true;
			}
			
		}
		return false;
	}
	@POST
	@Path("/ulogovan")
	@Consumes(MediaType.APPLICATION_JSON)
	public Korisnik Ulogovan() {
		KorisnikDAO korisnikDAO = (KorisnikDAO) ctx.getAttribute("korisnikDAO");
		Korisnik k =(Korisnik) request.getSession().getAttribute("ulogovan");
		return k;
	}

	@POST
	@Path("/izlogujse")
	@Consumes(MediaType.APPLICATION_JSON)
	public void IzlogujSe() {
		KorisnikDAO korisnikDAO = (KorisnikDAO) ctx.getAttribute("korisnikDAO");
		Korisnik k =(Korisnik) request.getSession().getAttribute("ulogovan");
		request.getSession().removeValue("ulogovan");
	}

	@GET
	@Path("/svikorisnici")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Korisnik> PrikaziSve() {
		KorisnikDAO korisnikDAO = (KorisnikDAO) ctx.getAttribute("korisnikDAO");
		return korisnikDAO.PrikaziSve();
	}

	@GET
	@Path("/sort/{parametar}/{rastuciRedosled}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Korisnik> sort(@PathParam("parametar") String parametar, @PathParam("rastuciRedosled") boolean rastuciRedosled){
		KorisnikDAO korisnikDAO = (KorisnikDAO) ctx.getAttribute("korisnikDAO");
		return korisnikDAO.sort(parametar, rastuciRedosled);
	}

	@GET
	@Path("/filter/{param}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Korisnik> Filter(@PathParam("param") String parametar){
		KorisnikDAO korisnikDAO = (KorisnikDAO) ctx.getAttribute("korisnikDAO");
		return korisnikDAO.Filter(parametar);
	}
	@GET
	@Path("/pretrazi/{korIme}/{ime}/{prezime}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Korisnik> Pretrazi(@PathParam("korIme") String korIme,@PathParam("ime") String ime,
			@PathParam("prezime") String prezime){
		KorisnikDAO korisnikDAO = (KorisnikDAO) ctx.getAttribute("korisnikDAO");
		return korisnikDAO.Pretrazi(korIme,ime,prezime);
	}
	
	@PUT
	@Path("/blokiraj/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void Vrati(@PathParam("id") Integer id) 
	{
		KorisnikDAO korisnikDAO = (KorisnikDAO) ctx.getAttribute("korisnikDAO");
		korisnikDAO.Blokiraj(id);
	}
}
