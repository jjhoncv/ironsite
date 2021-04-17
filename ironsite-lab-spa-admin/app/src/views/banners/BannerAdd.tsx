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
  Button,
} from "../../components/Form";
import { Loading } from "../../components/Loading";
import { Page, PageHead, PageBody } from "../../components/Page";
import * as bannerActions from "../../stores/banner";
import { useForm } from "react-hook-form";

export const BannerAdd = ({ history }) => {
  const isFetching = useSelector((state: any) => state.banner.isFetching);
  const error = useSelector((state: any) => state.banner.error);
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();
  const formRef = React.useRef(null) as any;

  const onSubmit = (data) => {
    dispatch(bannerActions.create(history, data));
  };

  return (
    <Container>
      {!!error && <FloatMessage show={!!error}>{error}</FloatMessage>}
      {isFetching && <Loading />}
      <Page>
        <PageHead>
          <h1>New Banner</h1>
        </PageHead>
        <PageBody>
          <Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <FormItem>
              <FormLabel>Title</FormLabel>
              <Input fullWidth type="text" name="title" ref={register()} />
            </FormItem>
            <FormItem>
              <FormLabel>Description</FormLabel>
              <Input
                fullWidth
                type="text"
                name="description"
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
                ref={register({
                  validate: (value) => value.length > 0 || "Campo requerido",
                })}
              />
            </FormItem>
            <FormFoot align="left">
              <Input type="submit" value="Add banner" />
              <Button outline handleClick={() => history.push("/banners")}>
                Cancelar
              </Button>
            </FormFoot>
          </Form>
        </PageBody>
      </Page>
    </Container>
  );
};
