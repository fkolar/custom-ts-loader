export interface RuleOption {
  name: string;
  ossUrls?: string;
}

export function Rule(option: RuleOption): ClassDecorator {
  return (constructor) => {
    constructor['__oss_rule__'].option = option;
  };
}

