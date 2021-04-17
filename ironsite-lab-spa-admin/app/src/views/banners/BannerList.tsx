import * as React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/Container";
import {
  FloatMessage,
  FloatMessageBody,
  FloatMessageOptions,
} from "../../components/Float";
import { Page, PageHead, PageBody } from "../../components/Page";
import { TableCustom } from "../../components/Table";
import { Button } from "../../components/Form";

import * as bannerActions from "../../stores/banner";
import { Loading } from "../../components/Loading";

const Option: React.FC<any> = ({ id, handleDelete, ...props }) => {
  const [show, setShow] = React.useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickEdit = () => {
    history.push("banners/edit/" + id, { banner: props });
  };

  const handleClickDelete = () => {
    dispatch(bannerActions.remove(id));
    dispatch(bannerActions.read());
  };
  return (
    <>
      <FloatMessage show={show} hide={() => setShow(false)}>
        <FloatMessageBody>¿Are you sure to delete it?</FloatMessageBody>
        <FloatMessageOptions align="left">
          <Button handleClick={() => handleClickDelete()}>Delete</Button>
          <Button outline handleClick={() => setShow(false)}>
            Cancel
          </Button>
        </FloatMessageOptions>
      </FloatMessage>
      <span onClick={() => handleClickEdit()}>Edit</span>
      <span onClick={() => setShow(true)}>Remove</span>
    </>
  );
};

const TableRow = ({ row }) => {
  return (
    <div className="row">
      <div className="col">{row.id}</div>
      <div className="col">{row.title}</div>
      <div className="col">{row.description}</div>
      <div className="col">
        <img
          style={{ maxHeight: "100px", maxWidth: "100px" }}
          src={`${process.env.SERVER_ELEMENTS}/${row.image}`}
        />
      </div>
      <div className="col">{row.orden}</div>
      <div className="col">
        <div className="option">
          <Option {...row} />
        </div>
      </div>
    </div>
  );
};

export const BannerList = () => {
  const isFetching = useSelector((state: any) => state.banner.isFetching);
  const data = useSelector((state: any) => state.banner.data);
  const error = useSelector((state: any) => state.banner.error);
  const dispatch = useDispatch();

  React.useEffect(() => {
    !data && dispatch(bannerActions.read());
  }, [data]);

  return (
    <Container>
      {!!error && <FloatMessage show={!!error}>{error}</FloatMessage>}
      {isFetching && <Loading />}
      <Page>
        <PageHead>
          <h1>Banners</h1>
        </PageHead>
        <PageBody>
          <TableCustom
            ComponentRow={(props) => <TableRow row={props} />}
            grid={data}
          />
        </PageBody>
      </Page>
    </Container>
  );
};
