import area

PEOPLE_AT_CONCERT_PER_SQUARE_METER = 2
FIELD_LENGTH = 240
FIELD_WIDTH = 45
PEOPLE_AT_CONCERT = area.rectangle(FIELD_LENGTH, FIELD_WIDTH) // PEOPLE_AT_CONCERT_PER_SQUARE_METER

if __name__ == "__main__":
    print("Estão presentes no show aproximadamente", PEOPLE_AT_CONCERT, "pessoas")
