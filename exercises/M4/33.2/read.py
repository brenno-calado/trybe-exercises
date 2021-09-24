import json

with open("pokemons.json", "r") as pokemon_file:
    pokemons = json.load(pokemon_file)["results"]

grass_type_ids = [pokemon for pokemon in pokemons]

with open("pokemon_by_main_type", "w") as main_types:
    main_types_write = json.dumps(grass_type_ids)
    main_types.write(main_types_write)