import { deleteDirectorMutation, updateDirectorMutation } from "./mutations";
import { directorsQuery } from "../DirectorsTable/queries";
import { compose } from "recompose";
import { graphql } from "react-apollo";

const withGraphqlDelete = graphql(deleteDirectorMutation, {
  props: ({ mutate }) => ({
    deleteDirector: (id) =>
      mutate({
        variables: id,
        refetchQueries: [
          {
            query: directorsQuery,
            variables: { name: "" },
          },
        ],
      }),
  }),
});

export default compose(withGraphqlDelete);
