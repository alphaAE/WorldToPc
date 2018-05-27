package cn.alphaae.worldtopc.item;

import cn.alphaae.worldtopc.FileChooser;
import cn.alphaae.worldtopc.Reader;
import net.minecraft.block.Block;
import net.minecraft.creativetab.CreativeTabs;
import net.minecraft.entity.player.EntityPlayer;
import net.minecraft.item.Item;
import net.minecraft.item.ItemStack;
import net.minecraft.util.BlockPos;
import net.minecraft.util.ChatComponentTranslation;
import net.minecraft.util.EnumFacing;
import net.minecraft.world.World;

public class DeemoItem extends Item {
	private boolean k = false;
	public DeemoItem() {
		super();
		this.setUnlocalizedName("deemoitem");
		this.setMaxStackSize(1);
		this.setCreativeTab(CreativeTabs.tabTools);
	}

	public boolean onItemUseFirst(ItemStack stack, EntityPlayer player, World world, BlockPos pos, EnumFacing side, float hitX, float hitY, float hitZ)
    {
		for (int i = 0; i < 500; i++) {
 			BlockPos pos2 = new BlockPos( pos.getX()+i, pos.getY(), pos.getZ());
		 	world.setBlockState(pos2, Block.getStateById(i), 0);
			
		}

        return false;
    }
}
