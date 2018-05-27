package cn.alphaae.worldtopc;

import java.io.*;

import net.minecraft.block.Block;
import net.minecraft.util.BlockPos;
import net.minecraft.world.World;

public class Reader {
	
	public static String Path = null;
	public static int Sopt0X;
	public static int Sopt0Y = -1;
	public static int Sopt0Z;
	
	public Reader(World world) {
		try {

		String PathM = "C:\\Users\\alphaAE\\Desktop\\io";
		String FileName = "io.worldo";

		//NewPath(PathM);
		//NewFile(Path+FileX);

		
		BufferedInputStream FileIn = new BufferedInputStream(new FileInputStream(Path));
		DataInputStream dFileIn = new DataInputStream(FileIn);
		
		int x,y,z,id,data;
		BlockPos pos;
		
		try {
			while (true) {
				x = dFileIn.readInt();
				y = dFileIn.readInt();
				z = dFileIn.readInt();
				id= dFileIn.readInt();
				data = dFileIn.readInt();
				
			 	pos = new BlockPos( x+Sopt0X, y+Sopt0Y, z+Sopt0Z);
			 	world.setBlockState(pos, Block.getStateById(id), data);
			 	
				
			}
		} catch (EOFException e) {
			System.out.println("到达文件尾");
		}
		

		}catch (IOException e) {
			System.out.println(e);
		}
		System.out.println("GET");
	}
	
	
	private void NewPath(String p) {
		try {
			File f = new File(p);
			if(f.exists()){
				System.out.println("文件夹 "+p+" 已存在");
			} else {
				f.mkdir();
			}
		} catch (Exception e) {
			// TODO: handle exception
		}	
	}
	
	private void NewFile(String p) {
		try {
			File f = new File(p);
			if(f.exists()){
				System.out.println("文件 "+p+" 已存在");
			} else {
				f.createNewFile();
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
	
	private void DelFile(String p) {
		try {
			File f = new File(p);
			if(f.exists()){
				f.delete();
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
	
}
