# Proyecto React con TypeScript

Este proyecto es un ejemplo de una pequeña aplicación que permite gestionar el ingreso de productos y visualización en listado de estos productos.

## Propietario
- Alumno: Roberto García Nieto
- Legajo: 47576
- Materia: Desarrollo de SoftWare
- Curso: 3K09

## Tecnologías Utilizadas
- React
- TypeScript

## Estructura del Proyecto

- **index.html**: Archivo principal que contiene la estructura HTML de la aplicación.
- **src/**: Carpeta que contiene los archivos TypeScript organizados por funcionalidades.
  - **main.tsx**: Archivo principal de TypeScript que inicializa la aplicación.
  - **App.tsx**: El componente principal que renderiza el componente AppProduct.
  - **components/**: Carpeta que contiene los componentes
    - **AppProduct/**: Carpeta que contiene las secciones de la aplicacion:
      - **FormProduct.tsx**: El componente que renderiza el formulario para agregar productos.
      - **Header.tsx**: Archivo TypeScript que contiene el header de la aplicacion
      - **ListProduct.tsx**:  El componente que renderiza la lista de productos.
      - **AppProduct.tsx**: El componente que maneja el estado de los productos y renderiza el formulario y la lista de productos.
  - **hooks/**:
    - **useForm.ts**: Un hook personalizado para manejar el estado del formulario.
