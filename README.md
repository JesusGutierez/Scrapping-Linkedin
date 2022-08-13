# RETO KROWDY SCRAPPING


Instalar dependencias

```bash
  yarn
```

Generar carpeta de plugin, en el proyecto aparecera una carpeta **dist**

```bash 
  yarn dev
```

Luego de inciar el proyecto copiar el contenido de lib adentro de la carpeta dist

Ir a **chrome://extensions**, activar el modo desarrollador y dar click en
```
  Cargar extensión sin empaquetar
```
Se abrira una ventana y tendremos que seleccionar la carpeta dist, al elegirla se añadira el plugin.

## Imagenes

### 1. En la pagina de un usuario y se hace click en el plugin, se obtendra la informacion de contacto, estudios y experiencias del perfil que se esta viendo.

![Obtención de data](https://user-images.githubusercontent.com/61990302/184468034-e034df9b-771e-4980-a5df-79ff53c361ce.png)

### 2. Luego de haber obtenido la información, se envia a una base de datos mongoDB mediante una API.

![Headers de post profiles](https://user-images.githubusercontent.com/61990302/184468101-093a55f6-c6a8-4c74-b2ed-e33ffefd255d.png)
![Payload de post profiles](https://user-images.githubusercontent.com/61990302/184468105-3929f3e4-570b-428a-a69e-e17fe59c3699.png)

### 3. La información se guarda correctamente

![Guardado](https://user-images.githubusercontent.com/61990302/184468150-33d02666-a609-4a87-97d1-250e51a9ad44.png)
