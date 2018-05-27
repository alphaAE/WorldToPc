package cn.alphaae.worldtopc;

import org.apache.logging.log4j.Logger;

import net.minecraftforge.common.config.Configuration;
import net.minecraftforge.fml.common.event.FMLPreInitializationEvent;

public class ConfigLoader {

	private static Configuration config;
    private static Logger logger;
    
    public static int Item2BurnTime;

    public ConfigLoader(FMLPreInitializationEvent event)
    {
        config = new Configuration(event.getSuggestedConfigurationFile());

        config.load();
        load();
    }
    
    public static void load()
    {
        String comment = "垃圾数据";
        Item2BurnTime = config.get(Configuration.CATEGORY_GENERAL, "alphaae", 233, comment).getInt();

        config.save();
    }

}
