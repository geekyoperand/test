import { Component } from "react";
import Link from "next/link";

class AboutPage extends Component {
  
  render() {
    return (
      <main>
        <section>
          I am b <br/>
          <Link href="/">
            <a>Go to Home1</a>
          </Link>
        </section>
      </main>
    );
  }
}

export default AboutPage;