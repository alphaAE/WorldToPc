package cn.alphaae.worldtopc.item;

import cn.alphaae.worldtopc.FileChooser;
import cn.alphaae.worldtopc.Reader;
import net.minecraft.block.Block;
import net.minecraft.block.state.IBlockState;
import net.minecraft.creativetab.CreativeTabs;
import net.minecraft.entity.player.EntityPlayer;
import net.minecraft.entity.projectile.EntityEgg;
import net.minecraft.item.Item;
import net.minecraft.item.ItemStack;
import net.minecraft.stats.StatList;
import net.minecraft.util.BlockPos;
import net.minecraft.util.ChatComponentTranslation;
import net.minecraft.util.EnumFacing;
import net.minecraft.world.World;
import net.minecraft.init.Blocks;

public class WorldtopcItem extends Item{
	private boolean k = false;
	public WorldtopcItem(){
		super();
		this.setUnlocalizedName("worldtopc");
		this.setMaxStackSize(1);
		this.setCreativeTab(CreativeTabs.tabTools);
		
	}
	 
	 public boolean onItemUseFirst(ItemStack stack, EntityPlayer player, World world, BlockPos pos, EnumFacing side, float hitX, float hitY, float hitZ)
	    {
		 	if (!k) {
		 		k = true;
		 		Reader.Sopt0X = pos.getX();
			 	Reader.Sopt0Y = pos.getY();
			 	Reader.Sopt0Z = pos.getZ();
			 	player.addChatMessage(new ChatComponentTranslation("chat.alphaae.Sopt0",  Reader.Sopt0X, Reader.Sopt0Y, Reader.Sopt0Z));
			 	
			 	new FileChooser(world);
			 	if(Reader.Path != null)new Reader(world);
		 		
			} else if(k){
		 		k = false;
		 		if(Reader.Path != null)new Reader(world);
		 		Reader.Path = null;

			}

	        return false;
	    }

}
