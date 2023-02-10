# Test Novopayment

Este proyecto está realizado con [Create React App](https://github.com/facebook/create-react-app).

### Herramientas Usadas

```
React
SCSS
ReactI18nNext
```

## Proceso realizado

En este proyecto se abordo el escenario donde se tenía que crear una vista a partir de un mockup y generar un menú multinivel que se generaba por medio de un endpoint.

El punto del desarrollo del menú se basó en como lo abordó [Ant Desing](https://ant.design/components/menu) sin embargo se contruyó desde cero el componente.

Para el abordaje del componente de navegación se tranformaron los datos entregados de la manera:


```
        "list": [
            {
                "card_list": [],
                "pays_transfer": [
                    {
                        "between_cards": [],
                        "banks": [],
                        "credit_card": [
                            {
                                "visa": [],
                                "master_card": []
                            }
                        ]
                    }
                ],
                "support": [
                    {
                        "lock": [],
                        "change_pass": []
                    }
                ],
                "enterprises": []
            }
        ]

```

y se transformaron a 


```
        "list": [
            {
               "title": "card_list"
            },
            {
                "title":"pays_transfer",
                "children":[
                    {
                        "title":"between_cards",
                    }
                        "title", "banks":,
                        "title":"credit_card"
                        "children": [
                            {
                                "title":"visa",
                                "title":"master_card"
                            }
                        ]
                    }
                ],
           ...
        ]

 Para esto se creó una función recursiva en el componente  `Navbar` el cual es un HOC que contiene otros dos componentes `MenuItems` y `ItemDropdown` para renderizar el Schema resultante en una lista html.
 
 `MenuItems` se encarga de renderizar los elementos que no contienen hijos

`ItemDropdown` Renderiza lso elementos que tienen hizo para retornar un elementos desplegable
```
## Iniciar el proyecto

### Clonar el proyecto

```
git clone https://github.com/giovannybm/test-novopayment.git
```

### Instalar dependencias

```
npm install
```

### Levantar servidor de desarrollo

```
npm start
```
