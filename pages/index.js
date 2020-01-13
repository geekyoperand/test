import React, { Component } from 'react'
import Link from "next/link";

export default class extends Component {
  render() {
    return (
      <div>
          <Link href='/a'>got to a </Link>
          <Link href='/b'>got to b </Link>
      </div>
    )
  }
}
