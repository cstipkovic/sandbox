package book.core.java.chapter10;

import java.io.FileInputStream;
import java.io.IOException;

public class AppFileInputStream {

    public static void main (String args[]) throws IOException{
        FileInputStream fis;
        fis = new FileInputStream("entrada.txt");
        int leitura;

        leitura = fis.read();
        System.out.println("Primeiro valor lido: " + leitura);
        leitura = fis.read();
        System.out.println("segundo valor: " + leitura);
        fis.close();
    }
}