package services;

import java.util.ArrayList;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import dao.LokacijaDAO;
import dto.ObjekatDTO;

@Path("/lokacije")
public class LokacijaService {
	@Context
	ServletContext ctx;

	public LokacijaService() {}

	@PostConstruct
	public void init() {
		if (ctx.getAttribute("lokacijaDAO") == null) {
	    	String contextPath = ctx.getRealPath("");
			ctx.setAttribute("lokacijaDAO", new LokacijaDAO(contextPath));
		}
	}

	@GET
	@Path("/dobaviSveAdrese")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<String> dobaviSveAdrese(){
		LokacijaDAO lokacijaDAO = (LokacijaDAO) ctx.getAttribute("lokacijaDAO");

		return lokacijaDAO.dobaviSveAdrese();
	}

	@POST
	@Path("/kreiraj")
	@Consumes(MediaType.APPLICATION_JSON)
	public boolean KreirajLokaciju(ObjekatDTO obejakt)
	{
		LokacijaDAO lokacijaDAO = (LokacijaDAO) ctx.getAttribute("lokacijaDAO");
		return lokacijaDAO.Kreiraj(obejakt);
	}
}