package cn.alphaae.worldtopc;

import net.minecraftforge.fml.common.SidedProxy;
import net.minecraftforge.fml.common.Mod;
import net.minecraftforge.fml.common.Mod.EventHandler;
import net.minecraftforge.fml.common.Mod.Instance;
import net.minecraftforge.fml.common.event.FMLInitializationEvent;
import net.minecraftforge.fml.common.event.FMLPostInitializationEvent;
import net.minecraftforge.fml.common.event.FMLPreInitializationEvent;

@Mod(modid = Main.MODID, name = Main.NAME, version = Main.VERSION, acceptedMinecraftVersions = "1.8.9")



public class Main {
	public static final String MODID = "worldtopc";
    public static final String NAME = "worldtopc";
    public static final String VERSION = "0.0.7";

    @Instance(Main.MODID)
    public static Main instance;

    @EventHandler
    public void preInit(FMLPreInitializationEvent event)
    {  
    	new ItemLoader(event);
        
    }

    @EventHandler
    public void init(FMLInitializationEvent event)
    {
    	
    }

    @EventHandler
    public void postInit(FMLPostInitializationEvent event)
    {
    	
    }
  
}
	
