import gql from 'graphql-tag';


export const LAUCHES_QUERY = gql`
query launches {
    launches {
      mission_id
      mission_name
      launch_year
      launch_date_local
      details
      launch_success
      links{
        flickr_images
        wikipedia
      }
      rocket{
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;