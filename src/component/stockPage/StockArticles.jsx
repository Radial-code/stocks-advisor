import moment from "moment";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";

const StockArticles = ({ history, getValueOf }) => {
  const allRelatedNews = useSelector((state) => state.cmPanel.allRelatedNews);
  const { layoutClickChanger } = useLayoutChangerProvider();

  const contentHandler = (value) => {
    return {
      __html: value,
    };
  };

  return (
    <>
      <Container className="max-w-container ">
        <Row>
          <Col xs={12}>
            <p className="profile-heading fs-md-20 fs-md-14 ">
              {getValueOf("Related News Articles")}
            </p>
          </Col>
          {allRelatedNews && allRelatedNews.length
            ? allRelatedNews.map((value) => {
                return (
                  <Col xs={12} className="mt-5">
                    <section className="news-articles-card p-lg-5 p-3 mb-4">
                      <Row className="justify-content-between">
                        <Col xl={3} lg={4} xs={4} className="my-auto ">
                          <div
                            className="stock-articles-img "
                            onClick={() =>
                              history.push(`/news/details/${value._id}`)
                            }
                          >
                            <img
                              className="stock-articles-img cursor-pointer d-block mx-auto"
                              src={value.imagePath}
                              alt=""
                            />
                          </div>
                        </Col>
                        <Col xl={9} lg={8} xs={8}>
                          <div>
                            <p className="stock-paragraph mt-md-2 mt-lg-0 mb-0 articles-date">
                              <span>
                                {moment(value.createdAt).format("dd/MM/YYYY")}{" "}
                              </span>
                              - {moment(value.updatedAt).format("dd/MM/YYYY")}
                            </p>
                            <p
                              onClick={() =>
                                history.push(`/news/details/${value._id}`)
                              }
                              className="heading-stock fs-md-25 fs-sm-20 articles-title cursor-pointer"
                            >
                              {layoutClickChanger ? (
                                <>{value.atitle ? value.atitle : "N/A"}</>
                              ) : (
                                <>{value.title ? value.title : "N/A"}</>
                              )}
                            </p>
                            <p className="stock-paragraph max-w-para d-none d-lg-block">
                              {layoutClickChanger ? (
                                <p
                                  dangerouslySetInnerHTML={
                                    !!value && !!value.adescription
                                      ? contentHandler(value.adescription)
                                      : "N/A"
                                  }
                                />
                              ) : (
                                <p
                                  dangerouslySetInnerHTML={
                                    !!value && !!value.description
                                      ? contentHandler(value.description)
                                      : "N/A"
                                  }
                                />
                              )}
                            </p>
                            <p
                              className={`${
                                layoutClickChanger ? "text-end" : "text-start"
                              }`}
                            >
                              <span
                                className="read-more cursor-pointer"
                                onClick={() =>
                                  history.push(`/news/details/${value._id}`)
                                }
                              >
                                {getValueOf("Read More")}
                              </span>
                            </p>
                            <p
                              className="small-paragraph d-none d-lg-block mb-0 cursor-pointer fw-bold mb-3 mt-3 color-blue"
                              onClick={() =>
                                history.push(
                                  `/stock/news/${value.stock._id}/${value.tags}`
                                )
                              }
                            >
                              {layoutClickChanger ? (
                                <>{value.atags ? value.atags : "N/A"}</>
                              ) : (
                                <>{value.tags ? value.tags : "N/A"}</>
                              )}
                            </p>
                            {value && value.stock && value.stock.symbol ? (
                              <p
                                className={`${
                                  layoutClickChanger
                                    ? "small-paragraph text-end"
                                    : "small-paragraph text-start"
                                }`}
                              >
                                <span className="ps-1 cursor-pointer fw-bold">
                                  Stock :
                                </span>
                                <span
                                  className="cursor-pointer fw-bold color-blue"
                                  onClick={() =>
                                    history.push(
                                      `/stock/news/${value.stock._id}/stock-tags`
                                    )
                                  }
                                >
                                  {value.stock.symbol}
                                </span>
                              </p>
                            ) : (
                              ""
                            )}
                          </div>
                        </Col>
                      </Row>
                    </section>
                  </Col>
                );
              })
            : null}
        </Row>
      </Container>
    </>
  );
};

export default withRouter(StockArticles);
