/**
 * Placeholder shown on tab pages that don't have real content yet.
 * Replace the <PageStub /> in each page file with the real markup
 * as the copy comes in.
 */
function PageStub({ title }: { title: string }) {
  return (
    <section className="page">
      <h1 className="page__title">{title}</h1>
      <div className="page__divider" />
      <p className="page__note">W przygotowaniu</p>
    </section>
  );
}

export default PageStub;
