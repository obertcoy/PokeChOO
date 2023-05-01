import { gql } from "@apollo/client";

export const GetAllPokemon = gql`
    query GetPokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
            count
            results {
            url
            name
            image
            }
        }
        }
`

export const GetPokemonDetail = gql`
  query GetPokemonDetails($name: String!) {
    pokemon(name: $name) {
      id
      name
      height
      weight
      sprites {
        front_default
        front_shiny
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`
export const GetEvolutionChain = gql`
  query GetEvolutionChain($id: String!) {
    evolutionChain(id: $id) {
      params
      status
      message
      response
    }
  }
`

export const GetEvolutionID = gql`
  query samplePokeAPIquery {
    data: pokemon_v2_pokemonspecies(order_by: {id: asc, pokemon_v2_evolutionchain: {id: asc}}) {
    name
    id
    pokemon_v2_evolutionchain {
      id
    }
  }
}

`