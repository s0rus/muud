"use client";

import { Button, type ButtonProps } from "./button";

type SubmitButtonProps = ButtonProps;

export function SubmitButton(props: SubmitButtonProps) {
  return (
    <Button
      {...props}
      type="submit"
      // aria-disabled={props.pending}
      // disabled={props.pending}
    >
      {props.children}
    </Button>
  );
}
