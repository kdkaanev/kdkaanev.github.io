from django.core.exceptions import ValidationError


def validate_name(value):
    for char in value:
        if not (char.isalpha() or char.isdigit() or char == '_'):
            raise ValidationError("The string is not valid.")
