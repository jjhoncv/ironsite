import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "../../components/Container";
import { FloatMessage } from "../../components/Float";
import {
  Form,
  FormItem,
  FormLabel,
  Input,
  FormFoot,
} from "../../components/Form";
import { Loading } from "../../components/Loading";
import { Page, PageHead, PageBody } from "../../components/Page";
import * as bannerActions from "../../stores/banner";
import { useForm } from "react-hook-form";

export const BannerEdit = ({ history, match, location }) => {
  const isFetching = useSelector((state: any) => state.banner.isFetching);
  const error = useSelector((state: any) => state.banner.error);
  const dispatch = useDispatch();
  const { id } = match.params;
  const { banner } = location.state;
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch(bannerActions.update(history, id, data));
  };

  return (
    <Container>
      {!!error && <FloatMessage show={!!error}>{error}</FloatMessage>}
      {isFetching && <Loading />}
      <Page>
        <PageHead>
          <h1>Banner</h1>
        </PageHead>
        <PageBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormItem>
              <FormLabel>Title</FormLabel>
              <Input
                fullWidth
                type="text"
                name="title"
                value={banner.title}
                ref={register()}
              />
            </FormItem>
            <FormItem>
              <FormLabel>Description</FormLabel>
              <Input
                fullWidth
                type="text"
                name="description"
                value={banner.description}
                ref={register()}
              />
            </FormItem>
            <FormItem>
              <FormLabel>Image</FormLabel>
              <Input
                fullWidth
                type="file"
                name="image"
                error={errors.image?.message}
                ref={register()}
              />
            </FormItem>
            <FormItem>
              <img
                style={{ maxWidth: "200px", maxHeight: "200px" }}
                src={`${process.env.SERVER_ELEMENTS}/${banner.image}`}
              />
            </FormItem>
            <FormFoot>
              <Input type="submit" value="update banner" />
            </FormFoot>
          </Form>
        </PageBody>
      </Page>
    </Container>
  );
};
