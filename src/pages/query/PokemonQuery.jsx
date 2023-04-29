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