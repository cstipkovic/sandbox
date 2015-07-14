package AppInputOutputStream;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class AppBytesDisponiveis {

    public static void main(String args[]) throws FileNotFoundException, IOException{
        FileInputStream fis = new FileInputStream("entrada.txt");
        int leitura = fis.read();
        System.out.println("Primeiro valor lido: " + leitura);
        leitura = fis.read();
        System.out.println("Segunda valor lio: " + leitura);
        int b = fis.available();
        System.out.println("Bytes disponíveis: " + b);
        fis.close();
    }
}
