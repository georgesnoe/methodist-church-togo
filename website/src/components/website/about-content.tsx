import { Button } from "./button";

export function AboutContent() {
  return (
    <section className="py-24 px-8 max-w-4xl mx-auto text-left">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-zinc-900">
          About the ministry
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu
          enim urna adipiscing praesent velit viverra sit semper{" "}
          <span className="font-bold text-zinc-900">
            로rem eu cursus vel hendrerit
          </span>{" "}
          elementum morbi curabitur etiam nibh justo, lorem aliquet donec sed
          nis et dignissim etiam a massa mattis.
        </p>
        <ul className="space-y-4 mb-10">
          {[
            "Neque sodales ut etiam sit amet nisi purus non tellus orci ac auctor",
            "Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti",
            "Mauris commodo quis imperdiet massa tincidunt nunc pulvinar",
            "Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti",
          ].map((text, i) => (
            <li key={text} className="flex gap-3 text-zinc-600">
              <span className="font-bold text-zinc-900">{i + 1}.</span> {text}
            </li>
          ))}
        </ul>
        <h3 className="text-2xl font-bold mb-6 text-zinc-900">
          How to get involved in the ministry?
        </h3>
        <p className="text-zinc-600 leading-relaxed mb-12">
          Vitae congue eu consequat ac felis placerat vestibulum lectus mauris
          ultrices cursus sit amet dictum sit amet justo donec enim diam
          porttitor{" "}
          <span className="font-bold text-zinc-900">lacus luctus accumsan</span>{" "}
          tortor posuere praesent tristique magna sit amet purus gravida quis
          blandit turpis.
        </p>
      </div>

      <div className="mb-16">
        <img
          src="https://images.unsplash.com/photo-1529070796766-3777ca99640a?auto=format&fit=crop&q=80&w=1200"
          alt="Youth Group activities"
          className="w-full h-auto rounded-[3rem] mb-6 shadow-xl"
        />
        <p className="text-center text-zinc-500 italic text-sm">
          Odio facilisis mauris sit amet massa vitae tortor.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-6 text-zinc-900">
          Ministry activities and schedule
        </h3>
        <p className="text-zinc-600 leading-relaxed mb-10">
          At risus viverra adipiscing sit in tellus integer feugiat nil pretium
          fusce id vel tortor sagittis orci a scelerisque purus semper eget et
          lacus laoreet{" "}
          <span className="font-bold text-zinc-900">suspendisse interdum</span>{" "}
          consectetur libero id faucibus nisl donec pretium cursus cras sed
          felis eget neque laoreet aliquam faucibus purus in.
        </p>
        <Button>Get involved</Button>
      </div>
    </section>
  );
}
