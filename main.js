var peliculas = [
    {
      nombre: 'Mision Imposible',
      imagen: 'https://image.tmdb.org/t/p/w300/83sGKvCv2T2CulYbd40Aeduc7n2.jpg'
    },
    {
      nombre: 'Gran Turismo',
      imagen: 'https://image.tmdb.org/t/p/w300/tVj5dn15iwkMhjU2wIih1yMy5LK.jpg'
    },
    {
      nombre: 'La Monja 2',
      imagen: 'https://image.tmdb.org/t/p/w300/x0ryPlzZjpOojEAuGrre2lFuBv6.jpg'
    },
    {
      nombre: 'Hipnosis: Arma Invisible',
      imagen: 'https://image.tmdb.org/t/p/w300/3IhGkkalwXguTlceGSl8XUJZOVI.jpg'
    },
  ];
  
  function agregarPelicula() {
    var imagenURL = document.getElementById('pelicula').value;
    var nombrePelicula = document.getElementById('nombrePelicula').value;
      
    if (imagenURL.trim() === '' || nombrePelicula.trim() === '') {
      alert('Por favor, Debe ingresar el nombre de la pelicula y un URL de imagen válida (terminando en .jpg o .png).');
      return;
    }
    
    if (imagenURL.endsWith('.jpg') || imagenURL.endsWith('.png')) {
      var containerFilme = document.createElement('div');
      containerFilme.className = 'container_filme';
  
      var imagen = document.createElement('img');
      imagen.src = imagenURL;
  
      var parrafo = document.createElement('p');
      parrafo.textContent = nombrePelicula;
  
      var botonEliminar = document.createElement('button');
      botonEliminar.textContent = 'Eliminar';
      botonEliminar.addEventListener('click', function () {
        containerFilme.remove();
      });
  
      containerFilme.appendChild(imagen);
      containerFilme.appendChild(parrafo);
      containerFilme.appendChild(botonEliminar);
      document.getElementById('listaPeliculas').appendChild(containerFilme);
  
      document.getElementById('pelicula').value = '';
      document.getElementById('nombrePelicula').value = '';
    } else {
      alert('Por favor, ingrese una URL de imagen válida (terminando en .jpg o .png).');
    }
    
  }
  
  peliculas.forEach(function (pelicula) {
    var containerFilme = document.createElement('div');
    containerFilme.className = 'container_filme';
  
    var imagen = document.createElement('img');
    imagen.src = pelicula.imagen;
  
    var parrafo = document.createElement('p');
    parrafo.textContent = pelicula.nombre;
  
    var botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', function () {
      containerFilme.remove();
    });
  
    containerFilme.appendChild(imagen);
    containerFilme.appendChild(parrafo);
    containerFilme.appendChild(botonEliminar);
    document.getElementById('listaPeliculas').appendChild(containerFilme);
  });
  
  
  /* 
      PRUEBAS PARA NOMBRE DE PELICULA Y LA IMAGEN DE LA PELICULA
    {
      nombre: Loky
      imagen: https://image.tmdb.org/t/p/w300/sxy9EXgc4nJw0uGojW5jHXQXKXq.jpg
    }
    
    {
      nombre: Flash
      imagen: https://image.tmdb.org/t/p/w300/x9Qc86JEyYkAKsdzjDpS5kbaAB7.jpg
    }
  */