import React from "react";

//
// System >>>
//

type SpacingSize = 0 | 1 | 2 | 3 | 4;

const spacingToValues = { 0: 0, 1: 8, 2: 16, 3: 32, 4: 64 };

function useSystemSpacing(size: SpacingSize) {
  return spacingToValues[size];
}

//
// >>> System
//

export function VSpace(props: { size: SpacingSize }) {
  const resolvedSpace = useSystemSpacing(props.size);
  return <div css={{ height: resolvedSpace }} />;
}

export function HSpace(props: { size: SpacingSize }) {
  const resolvedSpace = useSystemSpacing(props.size);
  return <span css={{ width: resolvedSpace }} />;
}
