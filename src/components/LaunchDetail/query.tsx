import gql from 'graphql-tag';

export const LAUNCHDEATIL_QUERY =gql`
query launchinfo($id: String){
    launch(id: $id){
      mission_id
      mission_name
      details
      upcoming
      links{
        flickr_images
        video_link
        wikipedia
      }
      launch_site{
        site_name_long
        site_id
      }
    }
  }
`; 