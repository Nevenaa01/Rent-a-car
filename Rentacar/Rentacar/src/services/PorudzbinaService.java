package services;

import java.util.ArrayList;

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

import dao.PorudzbinaDAO;
import dto.PorudzbinaDTO;
import model.Porudzbina;

@Path("/porudzbina")
public class PorudzbinaService {
	@Context
	ServletContext ctx;

	public PorudzbinaService() {}

	@PostConstruct
	public void init() {
		if (ctx.getAttribute("porudzbinaDAO") == null) {
	    	String contextPath = ctx.getRealPath("");
			ctx.setAttribute("porudzbinaDAO", new PorudzbinaDAO(contextPath));
		}
	}

	@POST
	@Path("/dodaj")
	@Consumes(MediaType.APPLICATION_JSON)
	public void dodaj(PorudzbinaDTO porudzbinaDTO) {
		PorudzbinaDAO porudzbinaDAO = (PorudzbinaDAO) ctx.getAttribute("porudzbinaDAO");

		porudzbinaDAO.dodaj(porudzbinaDTO);
	}

	@GET
	@Path("/dobaviPorudzbineKupca/{korisnickoIme}")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Porudzbina> dobaviPorudzbineKupca(@PathParam("korisnickoIme") String korisnickoIme){
		PorudzbinaDAO porudzbinaDAO = (PorudzbinaDAO) ctx.getAttribute("porudzbinaDAO");

		return porudzbinaDAO.dobaviPorudzbineKupca(korisnickoIme);
	}

	@GET
	@Path("/dobaviPorudzbinePoObjektima/{idObjekta}")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Porudzbina> dobaviPorudzbinePoObjektima(@PathParam("idObjekta") Integer idObjekta){
		PorudzbinaDAO porudzbinaDAO = (PorudzbinaDAO) ctx.getAttribute("porudzbinaDAO");

		return porudzbinaDAO.dobaviPorudzbinePoObjektima(idObjekta);
	}

	@GET
	@Path("otkazi/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public boolean Otkazi(@PathParam("id") String idPorudzbine){
		PorudzbinaDAO porudzbinaDAO = (PorudzbinaDAO) ctx.getAttribute("porudzbinaDAO");

		return porudzbinaDAO.Otkazi(idPorudzbine);
	}

	@GET
	@Path("/dobaviPorudzbinu/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Porudzbina dobaviPorudzbinePoObjektima(@PathParam("id") String id){
		PorudzbinaDAO porudzbinaDAO = (PorudzbinaDAO) ctx.getAttribute("porudzbinaDAO");

		return porudzbinaDAO.DobaviPoId(id);
	}

	@PUT
	@Path("/prihvati/{porudzbinaId}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void Prihvati(@PathParam("porudzbinaId") String id)
	{
		PorudzbinaDAO porudzbinaDAO = (PorudzbinaDAO) ctx.getAttribute("porudzbinaDAO");

		porudzbinaDAO.Prihvati(id);
	}

	@PUT
	@Path("/odbijanje/{porudzbinaId}/{kom}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void Odbij(@PathParam("porudzbinaId") String id, @PathParam("kom") String komentar)
	{
		PorudzbinaDAO porudzbinaDAO = (PorudzbinaDAO) ctx.getAttribute("porudzbinaDAO");

		porudzbinaDAO.Odbij(id,komentar);
	}
	
	@PUT
	@Path("/preuzeto/{porudzbinaId}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void Preuzmi(@PathParam("porudzbinaId") String id) 
	{
		PorudzbinaDAO porudzbinaDAO = (PorudzbinaDAO) ctx.getAttribute("porudzbinaDAO");
		
		porudzbinaDAO.Preuzmi(id);
	}
	
	@PUT
	@Path("/vraceno/{porudzbinaId}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void Vrati(@PathParam("porudzbinaId") String id) 
	{
		PorudzbinaDAO porudzbinaDAO = (PorudzbinaDAO) ctx.getAttribute("porudzbinaDAO");
		
		porudzbinaDAO.Vrati(id);
	}
}

