package cn.alphaae.worldtopc;

import cn.alphaae.worldtopc.item.DeemoItem;
import cn.alphaae.worldtopc.item.WorldtopcItem;
import javafx.geometry.Side;
import net.minecraft.client.resources.model.ModelResourceLocation;
import net.minecraft.item.Item;
import net.minecraftforge.client.model.ModelLoader;
import net.minecraftforge.fml.common.event.FMLPreInitializationEvent;
import net.minecraftforge.fml.common.registry.GameRegistry;
import net.minecraftforge.fml.relauncher.SideOnly;

public class ItemLoader {
	public static Item WorldtopcItem = new WorldtopcItem();
	public static Item DeemoItem = new DeemoItem();
	
	public ItemLoader(FMLPreInitializationEvent event) {
		register(WorldtopcItem, "worldtopc");
		registerRender(WorldtopcItem);
		register(DeemoItem, "deemoitem");
		registerRender(DeemoItem);
		
	}
	
	
	private static void register(Item item, String name)
    {
        GameRegistry.registerItem(item.setRegistryName(name));
    }
	
	private static void registerRender(Item item) {
		ModelResourceLocation model = new ModelResourceLocation(item.getRegistryName(), "inventory");
        ModelLoader.setCustomModelResourceLocation(item, 0, model);

	}
	

}
