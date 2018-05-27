package cn.alphaae.worldtopc;

import java.io.File;

import javax.swing.filechooser.FileFilter;

public class WorldoFileFilter extends FileFilter{
	public String getDescription() {    
        return "*.worldo";    
    }
    
    public boolean accept(File file) {    
        String name = file.getName();    
        return file.isDirectory() || name.toLowerCase().endsWith(".worldo");  // 仅显示目录和w文件  
    }
}
