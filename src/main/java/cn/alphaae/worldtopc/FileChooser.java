package cn.alphaae.worldtopc;

import java.io.File;  

import javax.swing.JFileChooser;  
import javax.swing.JLabel;

import net.minecraft.client.Minecraft;
import net.minecraft.util.ChatComponentTranslation;
import net.minecraft.world.World;  
  
public class FileChooser{   
    public FileChooser(World world){  
    	try {
    		JFileChooser jfc=new JFileChooser();
    		WorldoFileFilter worldoFilter = new WorldoFileFilter();
        	jfc.addChoosableFileFilter(worldoFilter);
        	jfc.setFileFilter(worldoFilter);
            jfc.setFileSelectionMode(JFileChooser.FILES_ONLY);  
            jfc.showDialog(new JLabel(), "选择文件");
            
            File file=jfc.getSelectedFile(); 
            if(file.isFile()){
                //System.out.println("�ļ�:"+file.getAbsolutePath());
                Reader.Path = file.getAbsolutePath();

            }
            //System.out.println(jfc.getSelectedFile().getName());

		} catch (Exception e) {
			Minecraft.getMinecraft().thePlayer.addChatMessage(new ChatComponentTranslation("chat.alphaae.filechoosercancel"));
		}
    	
    }
}